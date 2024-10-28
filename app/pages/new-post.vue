<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })

const randomTitle = ref(`${Math.ceil(Math.random() * 99999)}`)
const randomDescription = ref(
  `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.`,
)
const displayAlert = ref(false)
const newPost = async () => {
  try {
    displayAlert.value = true
    await $fetch('/api/posts', {
      method: 'POST',
      body: {
        title: randomTitle.value,
        description: randomDescription.value,
      },
    })
    newRandomPost()
  } catch (err) {
    console.log(err)
  } finally {
    setTimeout(() => {
      displayAlert.value = false
    }, 3000)
  }
}

const newRandomPost = () => {
  randomTitle.value = `${Math.ceil(Math.random() * 99999)}`
  randomDescription.value = `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.`
}
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="New post" class="capitalize" />

      <AwesomeAlertBanner
        v-if="displayAlert"
        type="success"
        title="Post created"
        text="Your post has been created successfully"
        class="my-6"
      />
    </LayoutPageHeader>
    <div class="">
      <FormKit
        v-model="randomTitle"
        type="text"
        label="Title"
        :classes="{
          outer: 'max-w-full',
        }"
      />
      <FormKit
        v-model="randomDescription"
        type="textarea"
        label="Description"
        :classes="{
          outer: 'max-w-full',
        }"
      />

      <div class="flex justify-end">
        <AwesomeButton
          text="Submit"
          type="submit"
          class="mt-4"
          @click="newPost"
        />
      </div>
    </div>
  </LayoutPageWrapper>
</template>
