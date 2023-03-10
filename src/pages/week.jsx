import Image from "next/image";
import React, { Component } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import './custom'



export default function Week() {


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
        <Link href="#" className="link-block w-inline-block">
          <Image
            src="target.svg"
            loading="lazy"
            width={16}
            height={16}
            alt=""
            className="image"
          />
        </Link>
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
            <Link
              href="/"
              aria-current="page"
              className="link"
            >
              Today
            </Link>
            <Link href="week" className="link  w--current">
              Week
            </Link>
          </div>
        </div>
        <div className="button-wrap">
          <Link href="#" className="link-block black-bg w-inline-block">
            <div className="celcius">°C</div>
          </Link>
          <Link href="#" className="link-block white-bg w-inline-block">
            <div className="celcius black">°F</div>
          </Link>
          <div
            data-hover="false"
            data-delay={0}
            className="dropdown w-dropdown"
          >
            <div className="dropdown-toggle w-dropdown-toggle" />
            <nav className="dropdown-list w-dropdown-list">
              <Link href="#" className="settings w-dropdown-link">
                Settings
              </Link>
              <Link href="#" className="settings w-dropdown-link">
                Switch Account
              </Link>
              <Link href="#" className="settings w-dropdown-link">
                Logout
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="menu-mobile">
        <div className="menu-wrap mobile">
          <Link
            href="/"
            aria-current="page"
            className="link"
          >
            Today
          </Link>
          <Link href="week" className="link mobile w--current">
            Week
          </Link>
        </div>
      </div>
      <div className="div-block-6">
  <div className="w-layout-grid grid-2">
    <div
      id="w-node-_91a4db38-8555-6708-a204-f13822ef9e20-6a21ce0a"
      className="day"
    >
      <div className="text-block-7">Sun</div>
      <Image
        src="weather-placeholder.svg"
        loading="lazy"
        alt=""
        width={50}
        height={50}
        className="image-7"
      />
      <div className="text-block-8">
        15<sup>°</sup>{" "}
        <span className="text-span-2">
          -3<sup>°</sup>
        </span>
      </div>
    </div>
    <div
      id="w-node-ee2d04e3-e25b-f367-1907-b461c0039d3a-6a21ce0a"
      className="day"
    >
      <div className="text-block-7">Mon</div>
      <Image
        src="weather-placeholder.svg"
        loading="lazy"
        alt=""
        width={50}
        height={50}
        className="image-7"
      />
      <div className="text-block-8">
        15<sup>°</sup>{" "}
        <span className="text-span-2">
          -3<sup>°</sup>
        </span>
      </div>
    </div>
    <div
      id="w-node-df3208c3-69af-cb7d-36ec-083a68a5cf99-6a21ce0a"
      className="day"
    >
      <div className="text-block-7">Tue</div>
      <Image
        src="weather-placeholder.svg"
        loading="lazy"
        width={50}
        height={50}
        alt=""
        className="image-7"
      />
      <div className="text-block-8">
        15<sup>°</sup>{" "}
        <span className="text-span-2">
          -3<sup>°</sup>
        </span>
      </div>
    </div>
    <div
      id="w-node-a93ea65d-b29b-b23a-79aa-cf2f213d49a4-6a21ce0a"
      className="day"
    >
      <div className="text-block-7">Wed</div>
      <Image
        src="weather-placeholder.svg"
        loading="lazy"
        width={50}
        height={50}
        alt=""
        className="image-7"
      />
      <div className="text-block-8">
        15<sup>°</sup>{" "}
        <span className="text-span-2">
          -3<sup>°</sup>
        </span>
      </div>
    </div>
    <div
      id="w-node-_719efb45-2a08-c5c0-5f21-7f29e8f3cb35-6a21ce0a"
      className="day"
    >
      <div className="text-block-7">Thu</div>
      <Image
        src="weather-placeholder.svg"
        loading="lazy"
        alt=""
        width={50}
        height={50}
        className="image-7"
      />
      <div className="text-block-8">
        15<sup>°</sup>{" "}
        <span className="text-span-2">
          -3<sup>°</sup>
        </span>
      </div>
    </div>
    <div
      id="w-node-_91a6d7a7-5f2e-4951-0705-99966b5c6def-6a21ce0a"
      className="day"
    >
      <div className="text-block-7">Fri</div>
      <Image
        src="weather-placeholder.svg"
        loading="lazy"
        alt=""
        width={50}
        height={50}
        className="image-7"
      />
      <div className="text-block-8">
        15<sup>°</sup>{" "}
        <span className="text-span-2">
          -3<sup>°</sup>
        </span>
      </div>
    </div>
    <div
      id="w-node-_6e513d4f-7124-91db-b24f-a2facbe415e0-6a21ce0a"
      className="day"
    >
      <div className="text-block-7">Sat</div>
      <Image
        src="weather-placeholder.svg"
        loading="lazy"
        alt=""
        width={50}
        height={50}
        className="image-7"
      />
      <div className="text-block-8">
        15<sup>°</sup>{" "}
        <span className="text-span-2">
          -3<sup>°</sup>
        </span>
      </div>
    </div>
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