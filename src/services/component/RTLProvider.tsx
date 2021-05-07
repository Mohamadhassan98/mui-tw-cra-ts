import React from "react";
import {jssPreset, StylesProvider} from "@material-ui/core/styles";
import {create} from "jss";
import rtl from "jss-rtl";

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

export default function RTLProvider({children}: {children: React.ReactElement | React.ReactElement[]}) {
  return <StylesProvider jss={jss}>{children}</StylesProvider>;
}
