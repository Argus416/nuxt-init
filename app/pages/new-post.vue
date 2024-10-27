<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })

const randomTitle = ref(`${Math.ceil(Math.random() * 99999)}`)
const randomDescription = ref(
  `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.`,
)

const newPost = async () => {
  try {
    const response = await useFetch({
      url: '/api/posts',
      method: 'POST',
      body: {
        title: randomTitle.value,
        description: randomDescription.value,
      },
    })
    console.log('response', response.data.value)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="New post" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection class="">
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
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
