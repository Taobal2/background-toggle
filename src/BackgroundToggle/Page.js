import React from "react";
import "./style.css";
import img1 from "./photography.jpg";

const Page = () => {
  const switchButton = document.getElementById("check");

  switchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  return (
    <div class="container">
      <div class="box">
        <input type="checkbox" class="check" id="check" />
        <label for="check" class="label">
          <span class="ball"></span>
        </label>
      </div>

      <img src={img1} class="container_img" />

      <div class="details">
        <h3>
          Photographers (as any other creatives) genuinely care about their
          work. The things they create talk about who they are and what they
          stand for. When asked to write content about their photographs and
          share processes, they become vulnerable. Let’s learn how you can build
          on that and turn it into an advantage.
        </h3>
        <button class="btn">See more</button>
      </div>
    </div>
  );
};

export default Page;
