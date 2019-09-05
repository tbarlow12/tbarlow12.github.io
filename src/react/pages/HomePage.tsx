import React, { useState } from "react";

export interface HomePageProps {
  clickCount: number
}

export interface HomePageState {
  clickCount: number;
  otherClickCount: number;
}

export function HomePage(props: HomePageProps) {
  const [myCount, setMyCount] = useState(0)
  const [myOtherCount, setMyOtherCount] = useState();

  return (
    <div>
      <p>
        Clicks: {myOtherCount}
      </p>
      <p>
        Other Clicks: {myCount}
      </p>
      <button onClick={() => setMyOtherCount(myOtherCount + 1)}>Increase Click Count</button>
      <button onClick={() => setMyOtherCount(myOtherCount - 1)}>Decrease Click Count</button>
      <button onClick={() => setMyCount(myCount + 1)}>Increase Click Count</button>
      <button onClick={() => setMyCount(myCount - 1)}>Decrease Click Count</button>
    </div>
  )
}