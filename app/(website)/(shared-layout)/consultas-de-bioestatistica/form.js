"use client";

import { Box, Flex, Grid, Select, Text, TextField, Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

export default function Form() {
  const topicos = [
    "Cálculo de amostra",
    "Análise estatística descritiva (tabela/gráfico)",
    "Análise estatística inferencial (bivariada/multivariada/outros)",
    "Sobre base de dados (Criação, limpeza, preparação para análises, etc)",
    "Reporte, interpretação de resultados de análise inferencial",
    "Redação de aspectos de análise estatística no protocolo",
    "Outro",
  ];

  return (
    <form>
      <Theme>
        <Flex direction="column" gap="3">
          <Grid columns="2" gap="4" width="auto">
            <Box>
              <Text style={{ color: "#178415" }} size="2" weight="bold" as="p" mb="1">
                Nome Completo
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Escreva seu nome completo"
                color="green"
                style={{ fontSize: 15 }}
              />
            </Box>
            <Box>
              <Text style={{ color: "#178415" }} size="2" weight="bold" as="p" mb="1">
                E-mail
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Escreva seu email"
                color="green"
                style={{ fontSize: 15 }}
              />
            </Box>
            <Box>
              <Text style={{ color: "#178415" }} size="2" weight="bold" as="p" mb="1">
                Contacto telemóvel
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Digite seu número de telefone"
                color="green"
                style={{ fontSize: 15 }}
              />
            </Box>
            <Box>
              <Text style={{ color: "#178415" }} size="2" weight="bold" as="p" mb="1">
                Data e hora (apenas em todas Quarta-feira, das 16-18h)
              </Text>
              <TextField.Input 
                radius="medium" 
                size="3"
                placeholder="Search the docs…"
                color="green"
                style={{ fontSize: 15 }}
              />
            </Box>
          </Grid>

          <Box>
            <Text style={{ color: "#178415" }} size="2" weight="bold" as="p" mb="1">
              Tópico de consulta
            </Text>
            <Select.Root size="3">
              <Select.Trigger color="green" style={{ fontSize: 15, width: "100%" }} radius="medium" placeholder="Select a fruit…" />
              <Select.Content position="popper">
                {topicos.map(function(topico) {
                  return (
                    <Select.Item 
                      key={topico}
                      style={{ fontSize: 15 }} 
                      value={topico}
                    >
                      {topico}
                    </Select.Item>
                  );
                })}
              </Select.Content>
            </Select.Root>
          </Box>
        </Flex>
      </Theme>
    </form>
  );
}