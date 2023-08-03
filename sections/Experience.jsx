import Title from "@/components/Title";
import Card from "@/components/Card";

import ReactJs from "../imgs/reactjs.png";
import HTML from "../imgs/html.png";
import CSS from "../imgs/css.png";
import JS from "../imgs/javascript.png";
import TailWindCss from "../imgs/tailwind-css.png";
import MUI from "../imgs/material-ui.png";
import Firebase from "../imgs/firebase.png";
import NextJs from "../imgs/next-js.png";
import Container from "@/components/Container";

export default function Experience() {
  return (
    <Container>
      <section id="experience" className="text-white">
        <Title text="Experience" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <Card image={HTML} name="HTML" />
          <Card image={CSS} name="CSS" />
          <Card image={JS} name="Javascript" />
          <Card image={ReactJs} name="React.JS" />
          <Card image={NextJs} name="Next.JS" width="250" />
          <Card image={TailWindCss} name="Tailwindcss" />
          <Card image={MUI} name="Material UI" />
          <Card image={Firebase} name="Firebase" />
        </div>
      </section>
    </Container>
  );
}
