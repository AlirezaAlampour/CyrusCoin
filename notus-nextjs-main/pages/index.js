/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Landing from "./landing";

export default function Index() {
  return (
    <>
      {/* <FirebaseAuthProvider firebase={firebase}{...config}> */}
        {/* <IndexNavbar fixed /> */}
        <Landing/>
      {/* </FirebaseAuthProvider> */}

    </>
  );
}
