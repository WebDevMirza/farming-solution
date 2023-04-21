import CTA from "../components/CTA";
import SecondaryHero from "../components/SecondaryHero";

const About = () => {
  return (
    <>
      <main>
        <SecondaryHero bgHero="bg-about" title="About Us" />
        <div className="w-[90%] mx-auto space-y-4 my-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quo similique dicta doloribus ipsam tenetur
            incidunt, vel quam dolor nulla ducimus temporibus voluptatibus obcaecati sunt molestias consequuntur unde
            reiciendis neque?
          </p>
          <p>
            Consequatur eligendi molestias rerum corporis ut, deleniti asperiores quae, error, repudiandae aut quia
            blanditiis facere pariatur ducimus? Sequi nihil fuga necessitatibus soluta aliquam itaque quo possimus
            numquam enim eveniet iure odit aliquid sint quis, culpa accusantium nostrum laudantium aspernatur magnam
            voluptatibus excepturi a distinctio. Quibusdam sequi, tenetur autem cumque omnis amet eaque nihil repellat
            dolor illo, architecto deleniti consectetur enim porro dolorem placeat repudiandae! Rerum vitae aliquid,
            cumque tempora fugiat, perspiciatis explicabo earum totam, quos nesciunt exercitationem voluptas veritatis
            accusamus provident necessitatibus! Iure iusto eos aperiam?
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, temporibus.</p>

          <ul className="list-disc ml-4">
            <li>Customer Satisfaction</li>
            <li>Quality Service</li>
            <li>Timely response</li>
            <li>Effective communication</li>
            <li>Personalization </li>
            <li>Professionalism</li>
            <li>Attention to detail</li>
            <li>Problem-solving</li>
            <li>skills Responsiveness</li>
            <li>Reliability</li>
          </ul>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni et mollitia rem corrupti magnam quibusdam
            nemo consectetur nisi quas optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio
            consequatur, incidunt quibusdam quod ad culpa necessitatibus commodi neque. Earum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae itaque minima incidunt in. Placeat
            doloribus quia rerum deleniti nemo? Sed, id, eius explicabo sint optio et molestiae, beatae ullam odit
            dolorum natus fugiat? Suscipit possimus excepturi mollitia odit quis sapiente eius necessitatibus error!
            Reiciendis voluptas blanditiis quos voluptate harum.
          </p>
        </div>

        <div className="w-[90%] mx-auto my-8 text-center text-xl uppercase flex justify-around items-center gap-4">
          <div className="hover:bg-appgray px-4 py-2 rounded">
            <p className="text-appgreen font-bold">2+</p>
            <p className="font-bold tracking-wider">Years of experience</p>
          </div>

          <div className="hover:bg-appgray px-4 py-2 rounded">
            <p className="text-appgreen font-bold">100+</p>
            <p className="font-bold tracking-wider">machineries</p>
          </div>

          <div className="hover:bg-appgray px-4 py-2 rounded">
            <p className="text-appgreen font-bold">2000+</p>
            <p className="font-bold tracking-wider">CUSTOMERS</p>
          </div>
        </div>
        <CTA />
      </main>
    </>
  );
};

export default About;
