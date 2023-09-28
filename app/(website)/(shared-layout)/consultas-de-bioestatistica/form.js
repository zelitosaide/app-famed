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
              <Text size="2" weight="bold">
                Nome Completo
              </Text>
              <TextField.Input 
                radius="large" 
                placeholder="Search the docs…"
                color="green"
              />
            </Box>
            <Box>
              <Text size="2" weight="bold">
                E-mail
              </Text>
              <TextField.Input 
                radius="large" 
                placeholder="Search the docs…"
                color="green"
              />
            </Box>
            <Box>
              <Text size="2" weight="bold">
                Contacto telemóvel
              </Text>
              <TextField.Input 
                radius="large" 
                placeholder="Search the docs…"
                color="green"
              />
            </Box>
            <Box>
              <Text size="2" weight="bold">
                Tópico de consulta
              </Text>
              <TextField.Input 
                radius="large" 
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