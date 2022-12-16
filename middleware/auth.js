export default function ({ redirect, store, route }) {

  if (!localStorage.getItem("Auth")) {
    redirect("/");
  }
}
