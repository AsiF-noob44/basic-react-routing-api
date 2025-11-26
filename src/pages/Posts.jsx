import { useState, useEffect } from "react";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data.slice(0, 30));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate next userId: find the highest userId and add 1
    const maxUserId = Math.max(...posts.map((post) => post.userId));
    const nextUserId = maxUserId + 1;

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: nextUserId,
          }),
        }
      );

      const newPost = await response.json();

      // Add the new post to the beginning of the posts array
      setPosts([newPost, ...posts]);

      // Reset form
      setPostTitle("");
      setPostBody("");
      setShowForm(false);

      alert("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Blog Posts</h1>
          <p className="text-gray-600 text-lg">
            Explore our collection of articles and insights
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`px-6 py-3 rounded-lg transition-colors duration-200 font-medium cursor-pointer ${
            showForm
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          {showForm ? "Cancel" : "Create Post"}
        </button>
      </div>

      {/* Create Post Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Create New Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Post Title
              </label>
              <input
                type="text"
                id="title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Enter post title"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Post Content
              </label>
              <textarea
                id="body"
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
                placeholder="Enter post content"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium cursor-pointer"
            >
              Submit Post
            </button>
          </form>
        </div>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading posts...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  Post #{post.id}
                </span>
                <span className="text-xs text-gray-500">
                  User {post.userId}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 capitalize">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
