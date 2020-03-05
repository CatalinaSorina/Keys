import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Tab from "./components/Tab/Tab";
import Paragraphs from "./components/Paragraph/Paragraphs";

const tabAsModalStyle = {
  buttonStyle: {
    position:"fixed",
    left:"1rem"
  },
  tabStyle: {
  }
}

const App = () => (
  <Wrapper
    style={{ width: "98vw", height: "96vh", alignItems: "center", padding: "1rem" }}
    content={<>
      <Tab content={<>
        <header>Header, in work</header>
        <Input 
          placeholder="try this input"
          text="Mary"
          fireChange={()=>console.log("I changed.")}
          fireClick={(e)=>console.log(`${e.target.value}, I am on fire.`)}
        />
        <Paragraphs text="Lorem ipsum dolor amet stumptown actually subway tile squid try-hard tilde biodiesel taiyaki paleo. Coloring book palo santo jean shorts green juice 90's hoodie chicharrones hammock. Chicharrones heirloom 90's polaroid ugh hella. Craft beer tousled organic tacos gastropub church-key. Post-ironic heirloom butcher unicorn pitchfork cloud bread direct trade offal kitsch fam. Lomo street art paleo blue bottle plaid poke pitchfork everyday carry master cleanse godard photo booth gastropub. Typewriter vinyl pitchfork keytar readymade, cold-pressed austin drinking vinegar chartreuse franzen banh mi gluten-free.
          Sartorial forage PBR&B, gluten-free shaman banjo man braid next level scenester. Cliche cray fingerstache selfies trust fund YOLO. Swag aesthetic shaman, semiotics woke cornhole iceland mumblecore sartorial artisan organic salvia bushwick mixtape. Tattooed salvia mustache pop-up put a bird on it.
          Godard enamel pin vape synth vaporware. Viral everyday carry portland pork belly locavore. Hella sartorial twee umami keytar, pitchfork biodiesel hashtag snackwave hot chicken gluten-free lyft poutine. Narwhal shabby chic irony kickstarter tbh, chia mixtape gentrify listicle.
          8-bit church-key seitan marfa ennui, wolf bitters. Pok pok cliche woke stumptown gluten-free vexillologist celiac slow-carb tattooed hammock enamel pin schlitz raclette four dollar toast poke. Live-edge poke actually, godard flexitarian subway tile taxidermy iceland forage craft beer PBR&B. Kale chips cronut enamel pin, tattooed chillwave plaid adaptogen tacos meditation. Subway tile disrupt artisan leggings, air plant asymmetrical 3 wolf moon gentrify paleo vice meditation celiac cardigan portland XOXO. Williamsburg health goth chillwave irony.
          Schlitz truffaut cronut, taiyaki asymmetrical heirloom pinterest leggings disrupt. Biodiesel raw denim truffaut hammock, franzen humblebrag cold-pressed food truck ennui thundercats dreamcatcher four loko forage blog cred. Cloud bread shoreditch ramps edison bulb photo booth mustache fanny pack quinoa cronut hashtag everyday carry heirloom. Blog plaid post-ironic hexagon.
          Oh. You need a little dummy text for your mockup? How quaint.
          I bet you’re still using Bootstrap too…"
          styledComponent="&:hover{color:blue;}"
        />
        <Button 
          text="click"
          style={{ color: "darkolivegreen", backgroundColor: "lightgreen", hoverBackground:"darkolivegreen", boxShadowColor: "darkolivegreen", margin:"2rem" }} 
          fireClick={()=>console.log("YOU CLICKED ME ^_^")}
          styledComponent="border-radius:0.2rem;width:8rem;border:none;"
        />
        <footer>bottom</footer>
      </>}
        openButtonText="see me"
        tabStyle={{alignItems:"center"}}
      />
      <Tab
        buttonStyle={tabAsModalStyle.buttonStyle}
        tabStyle={tabAsModalStyle.tabStyle}
        openTabText="Stun"
        tabAsModal={true}
        modalCloseButtonStyle={{boxShadow:"none"}}
        content={<>
          <div>
            <Paragraphs text="Lorem ipsum dolor amet stumptown actually subway tile squid try-hard tilde biodiesel taiyaki paleo. Coloring book palo santo jean shorts green juice 90's hoodie chicharrones hammock. Chicharrones heirloom 90's polaroid ugh hella. Craft beer tousled organic tacos gastropub church-key. Post-ironic heirloom butcher unicorn pitchfork cloud bread direct trade offal kitsch fam. Lomo street art paleo blue bottle plaid poke pitchfork everyday carry master cleanse godard photo booth gastropub. Typewriter vinyl pitchfork keytar readymade, cold-pressed austin drinking vinegar chartreuse franzen banh mi gluten-free.
              Sartorial forage PBR&B, gluten-free shaman banjo man braid next level scenester. Cliche cray fingerstache selfies trust fund YOLO. Swag aesthetic shaman, semiotics woke cornhole iceland mumblecore sartorial artisan organic salvia bushwick mixtape. Tattooed salvia mustache pop-up put a bird on it.
              Godard enamel pin vape synth vaporware. Viral everyday carry portland pork belly locavore. Hella sartorial twee umami keytar, pitchfork biodiesel hashtag snackwave hot chicken gluten-free lyft poutine. Narwhal shabby chic irony kickstarter tbh, chia mixtape gentrify listicle.
              8-bit church-key seitan marfa ennui, wolf bitters. Pok pok cliche woke stumptown gluten-free vexillologist celiac slow-carb tattooed hammock enamel pin schlitz raclette four dollar toast poke. Live-edge poke actually, godard flexitarian subway tile taxidermy iceland forage craft beer PBR&B. Kale chips cronut enamel pin, tattooed chillwave plaid adaptogen tacos meditation. Subway tile disrupt artisan leggings, air plant asymmetrical 3 wolf moon gentrify paleo vice meditation celiac cardigan portland XOXO. Williamsburg health goth chillwave irony.
              Schlitz truffaut cronut, taiyaki asymmetrical heirloom pinterest leggings disrupt. Biodiesel raw denim truffaut hammock, franzen humblebrag cold-pressed food truck ennui thundercats dreamcatcher four loko forage blog cred. Cloud bread shoreditch ramps edison bulb photo booth mustache fanny pack quinoa cronut hashtag everyday carry heirloom. Blog plaid post-ironic hexagon." 
            />
          </div>
        </>}
      />
      <Input 
        placeholder="try me"
        styledComponent="color:red; &::placeholder {color:rgba(255, 0, 0,0.7);}"
      />
    </>}
  />
);

export default App;
