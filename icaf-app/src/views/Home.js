import React from 'react'
import { NavBar } from '../components/header/NavBar'

export const Home = ({days,Minutes,Seconds,Hours}) => {
    return (
        <div>
            <NavBar/>
             <section className="home">
                </section>
                <div style={{height: '1000px'}}>
                    {/* just to make scrolling effect possible */}
                    
                        <p className="myP">Albi</p>
                            <p className="myP">
                            
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                        </p>
                </div>
                <div class="container-2">
                        <h1 className="time-head" id="headline">Countdown to the first conference:</h1>
                        <div id="countdown">
                            <ul>
                            <li className="count-list"><span id="days"></span>{days}</li>
                            <li className="count-list"><span id="hours"></span>{Hours}</li>
                            <li className="count-list"><span id="minutes"></span>{Minutes}</li>
                            <li className="count-list"><span id="seconds"></span>{Seconds}</li>
                            </ul>
                        </div>
                        <div id="content" class="emoji">
                            <span>🥳</span>
                            <span>🎉</span>
                            <span>🎂</span>
                        </div>
                        </div>
        </div>
    )
}

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Sep 30, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

          let days = Math.floor(distance / (day)),
          Hours = Math.floor((distance % (day)) / (hour)),
           Minutes = Math.floor((distance % (hour)) / (minute)),
          Seconds = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
