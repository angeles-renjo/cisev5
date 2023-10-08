import AuthProtected from "@/components/authProtrected";

function Admin() {
  return (
    <div className="container">
      <h1>This is ADMIN page</h1>
    </div>
  );
}

export default AuthProtected(Admin);
