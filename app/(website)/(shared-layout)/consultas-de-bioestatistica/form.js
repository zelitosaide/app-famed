"use client";

import { Box, Flex, Grid, Text, TextField, Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

export default function Form() {
  return (
    <form>
      <Theme>
        <Flex direction="column" gap="3">
          <Grid columns="2" gap="4" width="auto">
            <Box>
              <Text size="2" weight="bold" as="p" mb="2">
                Nome Completo
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Search the docs…"
                color="green"
              />
            </Box>
            <Box>
              <Text size="2" weight="bold" as="p" mb="2">
                E-mail
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Search the docs…"
                color="green"
              />
            </Box>
            <Box>
              <Text size="2" weight="bold" as="p" mb="2">
                Contacto telemóvel
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Search the docs…"
                color="green"
              />
            </Box>
            <Box>
              <Text size="2" weight="bold" as="p" mb="2">
                Tópico de consulta
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Search the docs…"
                color="green"
              />
            </Box>
          </Grid>
        </Flex>
      </Theme>
    </form>
  );
}