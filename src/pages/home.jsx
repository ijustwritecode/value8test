import Image from "next/image";
import React, { Component } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import './custom'


export default function Today() {


    return (
        <>
  <div className="wrap">
    <div className="left">
      <div className="location">
        <form action="/search" className="search-2 w-form">
          <input
            type="search"
            className="search-input w-input"
            maxLength={256}
            name="query"
            placeholder="Search for places ...."
            id="search"
            required=""
          />
          <Image
            src="search.svg"
            loading="lazy"
            alt=""
            width={16}
            height={16}
            className="image-2"
          />
          <input
            type="submit"
            defaultValue="Search"
            className="search-button w-button"
          />
        </form>
        <a href="#" className="link-block w-inline-block">
          <Image
            src="target.svg"
            loading="lazy"
            width={16}
            height={16}
            alt=""
            className="image"
          />
        </a>
        <Image
          src="close-square-svgrepo-com.svg"
          loading="lazy"
          data-w-id="79993b50-2b34-abd7-5ba5-5f44203bcbc5"
          alt=""
          width={24}
          height={24}
          className="image-6 close"
        />
      </div>
      <div className="div-block">
        <Image
          src="weather-placeholder.svg"
          loading="lazy"
          width={216}
          height={216}
          alt=""
          className="image-3"
        />
        <div className="degrees">
          12<sup>°C</sup>
        </div>
        <div className="date-time">
          Monday, <span className="text-span">16.00</span>
        </div>
      </div>
      <div>
        <div className="div-block-2">
          <Image
            src="weather-placeholder.svg"
            loading="lazy"
            alt=""
            width={32}
            height={32}
            className="image-4"
          />
          <div className="text-block-9">Mostly Cloudy</div>
        </div>
        <div className="div-block-2">
          <Image
            src="weather-placeholder.svg"
            loading="lazy"
            width={32}
            height={32}
            alt=""
            className="image-4"
          />
          <div className="text-block-10">Rain - 30%</div>
        </div>
      </div>
      <div className="div-block-3">
        <div className="region">New York, NY, USA</div>
      </div>
    </div>
    <div className="right">
      <div className="nav-bar">
        <div className="menu-wrap">
          <Image
            src="menu-hamburger-svgrepo-com.svg"
            loading="lazy"
            data-w-id="6cd9c47c-60a0-7b39-5ae3-20132817d402"
            alt=""
            width={24}
            height={24}
            className="image-6"
          />
          <div className="menu-wrapper">
            <a
              href="/"
              aria-current="page"
              className="link w--current"
            >
              Today
            </a>
            <a href="week" className="link">
              Week
            </a>
          </div>
        </div>
        <div className="button-wrap">
          <a href="#" className="link-block black-bg w-inline-block">
            <div className="celcius">°C</div>
          </a>
          <a href="#" className="link-block white-bg w-inline-block">
            <div className="celcius black">°F</div>
          </a>
          <div
            data-hover="false"
            data-delay={0}
            className="dropdown w-dropdown"
          >
            <div className="dropdown-toggle w-dropdown-toggle" />
            <nav className="dropdown-list w-dropdown-list">
              <a href="#" className="settings w-dropdown-link">
                Settings
              </a>
              <a href="#" className="settings w-dropdown-link">
                Switch Account
              </a>
              <a href="#" className="settings w-dropdown-link">
                Logout
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="menu-mobile">
        <div className="menu-wrap mobile">
          <a
            href="/"
            aria-current="page"
            className="link mobile w--current"
          >
            Today
          </a>
          <a href="week" className="link">
            Week
          </a>
        </div>
      </div>
      <div className="daily">
        <div className="div-block-4 rhs">
          <div className="degrees">
            12<sup>°F</sup>
          </div>
          <div className="date-time">
            Monday, <span className="text-span">16.00</span>
          </div>
        </div>
        <div className="div-block-4">
          <div className="div-block-5">
            <div className="div-block-2">
              <Image
                src="weather-placeholder.svg"
                loading="lazy"
                alt=""
                width={32}
                height={32}
                className="image-4"
              />
              <div className="text-block-6">Mostly Cloudy</div>
            </div>
            <div className="div-block-2">
              <Image
                src="weather-placeholder.svg"
                loading="lazy"
                width={32}
                height={32}
                alt=""
                className="image-4"
              />
              <div className="text-block-6">Rain - 30%</div>
            </div>
          </div>
          <Image
            src="weather-placeholder.svg"
            loading="lazy"
            alt=""
            width={150}
            height={150}
            className="image-5"
          />
        </div>
      </div>
      <div className="today">
        <div className="text-block">Today's Highlights</div>
        <div className="w-layout-grid grid">
          <div
            id="w-node-_28824305-fc14-592b-fc33-739162a2d460-40296aab"
            className="grid-item"
          >
            <div className="text-block-2">UV Index</div>
            <div
              className="lottie-animation"
              data-w-id="73b504dd-690e-ff6c-9ce9-0fb99314a9c6"
              data-animation-type="lottie"
              data-src="documents/50619-gauge.json"
              data-loop={0}
              data-direction={1}
              data-autoplay={1}
              data-is-ix2-target={0}
              data-renderer="svg"
              data-default-duration={10}
              data-duration={0}
            />
            <div className="text-block-3">5</div>
          </div>
          <div
            id="w-node-ad2fd62c-3456-fda1-97ec-d8127e552855-40296aab"
            className="grid-item"
          >
            <div className="text-block-2">Wind Status</div>
            <div className="text-block-4">
              7.70<sub className="subscript">km/h</sub>
            </div>
            <div className="text-icon-wrap">
              <Image
                src="target.svg"
                loading="lazy"
                alt=""
                width={16}
                height={16}
                className="icon"
              />
              <div className="text-block-5">WSW</div>
            </div>
          </div>
          <div
            id="w-node-a20955f6-5ef9-de74-35a5-8c5320160a44-40296aab"
            className="grid-item"
          >
            <div className="text-block-2">Sunrise &amp; Sunset</div>
            <div className="text-icon-wrap first">
              <Image
                src="target.svg"
                loading="lazy"
                alt=""
                width={16}
                height={16}
                className="icon"
              />
              <div className="text-block-5">
                6:32 PM
                <br />
                <span className="sun-time">- 2m 22s</span>
              </div>
            </div>
            <div className="text-icon-wrap">
              <Image
                src="target.svg"
                loading="lazy"
                alt=""
                width={16}
                height={16}
                className="icon"
              />
              <div className="text-block-5">
                5:42 PM
                <br />
                <span className="sun-time">+ 2m 22s</span>
              </div>
            </div>
          </div>
          <div
            id="w-node-_5ed7498d-d5fc-23cf-e074-26621b1470ec-40296aab"
            className="grid-item"
          >
            <div className="text-block-2">Humidity</div>
            <div className="text-block-4">
              12<sup className="superscript">%</sup>
            </div>
            <div className="thoughts">Normal</div>
          </div>
          <div
            id="w-node-_69c93bf4-12a4-06c2-bda0-ac90699cb2b9-40296aab"
            className="grid-item"
          >
            <div className="text-block-2">Visibility</div>
            <div className="text-block-4">
              5.2<sub className="subscript-2">km</sub>
            </div>
            <div className="thoughts">Average</div>
          </div>
          <div
            id="w-node-_900ad475-ad25-f7a8-dd52-f97f5d8ddc5d-40296aab"
            className="grid-item"
          >
            <div className="text-block-2">Air Quality</div>
            <div className="text-block-4">105</div>
            <div className="thoughts">Unhealthy</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* [if lte IE 9]><![endif] */}
</>

    );
}