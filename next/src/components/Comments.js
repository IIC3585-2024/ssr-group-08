import { getComments } from "@/app/lib/series/actions";
import { getUser } from "@/app/lib/auth/actions";

async function fetchCommentWithUser(comment) {
  const user = await getUser(comment.user_id);
  return {
    ...comment,
    userName: `${user.first_name} ${user.last_name}`,
  };
}

export default async function Comments({ seriesId }) {
  const comments = await getComments(seriesId);
  const commentsWithUsers = await Promise.all(
    comments.map(fetchCommentWithUser)
  );

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden mt-4">
      <h2 className="text-2xl font-bold text-white mb-4">Comentarios</h2>
      {commentsWithUsers.length === 0 ? (
        <p className="text-gray-400">No hay comentarios.</p>
      ) : (
        commentsWithUsers.map((comment) => (
          <div key={comment.id} className="bg-gray-900 p-2 rounded-lg mb-2">
            <p className="text-white">
              <strong>{comment.userName}:</strong> {comment.comment}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
