"use client";

import { Flex, TextField, Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

export default function Form() {
  return (
    <form>
      <Theme>
        <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
          <TextField.Input radius="none" placeholder="Search the docs…" />
          <TextField.Input radius="large" placeholder="Search the docs…" />
        </Flex>
      </Theme>
    </form>
  );
}