import React from "react";

import { Box, Button, useMediaQuery, useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

export default function Navigation() {
  return (
    <AppBar position="sticky" component="nav">
      <Toolbar>
        <Link href="/">
          <Button color="inherit" variant="text">
            Home Page
          </Button>
        </Link>

        <Link href="/posts/hello-world">
          <Button color="inherit" variant="text">
            Hello world
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

/**
 * 
 *        <Button component={Link} to="/" color="inherit" variant="text">
          Home Page
        </Button>
        <Button
          component={Link}
          to="/posts/hello-world"
          color="inherit"
          variant="text"
        >
          Hello World
        </Button>
 */
