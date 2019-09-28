export interface ContentPageProps {
  markdownContent: string;
}

export interface PageProps {
  history: any;
  location: {
    pathname: string;
  };
  match: any;
}
