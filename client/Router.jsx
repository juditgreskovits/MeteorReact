const {
  Router,
  Route,
  Link,
  IndexRoute,
  NotFoundRoute,
  DefaultRoute,
  Redirect
} = ReactRouter;

Meteor.startup(function () {
  ReactDOM.render((
    <Router>
      <Redirect from="/" to="/entry" />
      <Route path="/" component={Application}>
        <Route path="entry" component={RatingEntry}/>
        <Route path="results" component={RatingResults}/>
        <Route path="login" component={Login}/>
        <Route path="feedback" component={Admin}>
          <IndexRoute component={FeedbackList}/>
          <Route path=":feedbackId" component={Feedback}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById("container"));
});
