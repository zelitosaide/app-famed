"use client";

import { Box, Flex, Grid, TextField, Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

export default function Form() {
  return (
    <form>
      <Theme>
        <Flex direction="column" gap="3">
          <Grid columns="2" gap="3" width="auto">
            <Box>
              <TextField.Input radius="large" placeholder="Search the docs…" />
            </Box>
            <Box>
              <TextField.Input radius="large" placeholder="Search the docs…" />
            </Box>
            <Box>
              <TextField.Input radius="large" placeholder="Search the docs…" />
            </Box>
            <Box>
              <TextField.Input radius="large" placeholder="Search the docs…" />
            </Box>
          </Grid>
        </Flex>
      </Theme>
    </form>
  );
}