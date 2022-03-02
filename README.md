# Funções úteis para formatação brasileira

Este pacote tem o objetivo de auxiliar, de maneira simples, na manipulação de alguns formatos de números de documentos e códigos úteis usados no Brasil

[![npm package version](https://img.shields.io/npm/v/kd-utils-rc?color=red&logo=npm&style=flat-square)](https://www.npmjs.com/package/kd-utils-rc)
[![npm](https://img.shields.io/npm/l/kd-utils-rc?style=flat-square)](https://www.mit.edu/~amini/LICENSE.md)
![npm bundle size](https://img.shields.io/bundlephobia/min/kd-utils-rc?style=flat-square)
![npm](https://img.shields.io/npm/dt/kd-utils-rc?color=blue&style=flat-square)

## Instalação

```shell
    npm i kd-utils-rc
```

## Uso

```ts
    import { formatCep } from 'kd-utils-rc';
```

## Função `formatCep(value: string): string`

* Esta função formata um valor para um formato de CEP XXXXX-XXX

```ts
    formatCep('12345678'); // => 12435-678
    formatCep('00000000'); // => 00000-000
    formatCep('12ab45678'); // => 00000-000
```

## Função `formatCpf(value: string): string`

* Esta função formata um valor para um formato de CPF XXX.XXX.XXX-XX

```ts
    formatCpf('12345678901'); // => 123.456.789-01
    formatCpf('00000000000'); // => 000.000.000-00
```

## Função `formatCnpj(value: string): string`

* Esta função formata um valor para um formato de CNPJ XXX.XXX.XXX-XX

```ts
    formatCnpj('12345678901234'); // => 12.345.678/9012-34
    formatCnpj('00000000000000'); // => 00.000.000/0000-00
```

## Função `formatMobilePhone(value: string): string`

* Esta função formata um valor para um formato de Telefone Celular (XXX) X XXXX-XXXX

```ts
    formatMobilePhone('123456789012'); // => (123) 4 5678-9012
    formatMobilePhone('000000000000'); // => (000) 0 0000-0000
```

## Função `formatLandLine(value: string): string`

* Esta função formata um valor para um formato de Telefone Fixo (XXX) XXXX-XXXX

```ts
    formatLandLine('12345678901'); // => (123) 4567-8901
    formatLandLine('00000000000'); // => (000) 0000-0000
```

## Função `removeCharacter(value: string, characteresToRemove: string): string`

* Esta função substitui os caracteres em `valor` de acordo com o solicitado no parâmetro `characteresToRemove`

```ts
    removeCharacter('1234#@567@8,901', '#@'); // => 12345678,901
    removeCharacter(null, 'aˆ*&j'); // => null
    removeCharacter('1234#@567@8,901', null); // => 1234#@567@8,901
```
