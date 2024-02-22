<template>
    <div>
      <button @click="$router.go(-1)">Retour</button>
      <h1>Conversation {{ $route.params.id }}</h1>
      <p>Test</p>
    </div>
  </template>