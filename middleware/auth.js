/* export default function ({ store, redirect, route }) {

  if (store.state.isLogged) {
     const userInfo = store.state.userInfo;

    if ((route.name === 'dashboard' || route.name === 'index') && userInfo.alliance) {
      return redirect('/')
    }
    if ((route.name === 'index') && userInfo.role === "school-master") {
      return redirect("/")
    }
    if (route.name === 'index') {
      return redirect("/")
    }

  }

  if (!store.state.isLogged) {
    if (route.name === 'pdf-template' || route.name === 'pdf-template2' || route.name === 'pdf-template3' || route.name === 'pdf-template4' || route.name === 'pdf-template5'
    || route.name === 'pdf-template6' || route.name === 'pdf-template7' || route.name === 'pdf-template8' || route.name === 'pdf-template9' || route.name === 'pdf-template10'
    || route.name === 'pdf-template11' || route.name === 'pdf-template12' || route.name === 'pdf-template13' || route.name === 'login-automatic') {

    }else {
      return redirect('/');
    }
  }

}
 */
