import Header from "@/app/components/Header";
import LeftFeature from "@/app/components/LeftFeature";
import RightFeature from "@/app/components/RightFeature";
import Card from "@/app/components/Card";
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <LeftFeature
        heading="More than just a student group"
        content={
          <>
            <p>
              SwinLead is more than just a student group; it’s a vibrant
              community of changemakers, dreamers, and go-getters!
            </p>
            <br></br>
            <p>
              Whether you're a fearless trailblazer or a curious explorer, we've
              got something special for everyone.
            </p>
          </>
        }
        img="group.jpg"
      ></LeftFeature>
      <RightFeature
        heading="Diversity"
        content={
          <>
            <p>
              At SwinLead, we are dedicated to fostering an inclusive and
              diverse community. We value and respect people from all
              backgrounds and identities, including those with disabilities,
              individuals within the queer community, and all other marginalized
              communities.
            </p>
            <br></br>
            <p>
              We believe that embracing diversity strengthens our community,
              enhances our learning experiences, and empowers us to become
              compassionate and responsible leaders in our chosen fields.
            </p>
          </>
        }
        img="diversity.jpg"
      />
      <Card
        heading="SwinLead"
        topic=""
        desc="We are a student lead group dedicated to fostering an environment where members can grow both person...
        "
        logo="logo.png"
        to="#"
      ></Card>
      <Card
        heading="Swinburne Student Life"
        topic="Clubs"
        desc="Join a club! Whether you're into cultural activities, sports, academics, politics, ...."
        logo="logo.png"
        to="#"
      ></Card>
    </div>
  );
}
