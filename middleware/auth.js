export default function ({ redirect, store }) {
  const auth = store.state.auth == "null" ? true : false;
  if (auth) {
    redirect("/");
  }
}
