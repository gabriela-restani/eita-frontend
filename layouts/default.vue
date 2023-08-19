<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 100vh" >
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>
            :EITA: Educational Content
          </q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
          <q-btn align="around" label="Minha conta" icon="account_circle" color="purple-5" text-color="white" size="xl"/>

        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <slot />
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>