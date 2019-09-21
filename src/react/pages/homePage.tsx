import React from "react";
import ReactMarkdown from "react-markdown";
import { ContentPageProps } from "../../models/generic";

export interface HomePageState {
  pulls: any[];
  events: any[]
}

export function HomePage() {

  // const [pulls, setPulls] = useState();
  // const [events, setEvents] = useState();

  // const githubService = new GitHubService();
  // githubService.pulls("serverless", "serverless-azure-functions")
  //   .then((pullResult) => setPulls(pullResult));
  // githubService.userEvents("tbarlow12")
  //   .then((eventsResult) => setEvents(eventsResult))

  return (
    <div className="app-page-home">
      {"content"}
      {/* <ReactMarkdown source={content} /> */}
        
      {/* Look at useEffect for fetching data {pulls && pulls.map((pull: any) => <div>{pull.title}</div>)}
      {events && events.map((event: any) => <div>{event.type}</div>)} */}
    </div>
  )
}