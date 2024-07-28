import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Events ReactJS Indonesia - Upcoming Web Development Meetups and Workshops",
    },
    {
      property: "og:title",
      content:
        "Events ReactJS Indonesia - Upcoming Web Development Meetups and Workshops",
    },
    {
      name: "description",
      content:
        "Join Events ReactJS Indonesia to stay updated with upcoming web development meetups, workshops, and conferences. Enhance your skills and network with fellow developers.",
    },
    {
      name: "keywords",
      content:
        "ReactJS events, JavaScript meetups, web development workshops, ReactJS Indonesia, developer conferences, coding events in Indonesia",
    },
    {
      property: "og:description",
      content:
        "Join Events ReactJS Indonesia to stay updated with upcoming web development meetups, workshops, and conferences. Enhance your skills and network with fellow developers.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function EventsRoute() {
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
}
