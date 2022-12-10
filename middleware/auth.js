export default function ({ redirect, store, route }) {
  const auth = store.state.auth == null ? true : false;

  if (auth) {
    redirect("/");
  }
}
