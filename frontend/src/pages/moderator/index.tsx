import withAuth from "@/hoc/withAuth";

function Moderator() {
  return (
    <div className="container">
      <h1>This is the MODERATOR page</h1>
    </div>
  );
}

export default withAuth(Moderator);
