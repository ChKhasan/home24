<template lang="html">
  <div>
    <div class="product__comment-card">
      <div class="title"><h3>{{product?.user.username ? product?.user.username:`No Name`}}</h3></div>
      <div class="reyting">
        <div class="stars">
          <el-rate v-model="comment.rating" disabled> </el-rate>
        </div>
        <div class="date">
          <p>
            {{
              ` ${new Date(comment.date).getDate()} ${
                monthNames[new Date(comment.date).getMonth()]
              } ${new Date(comment.date).getFullYear()}г.`
            }}
          </p>
        </div>
      </div>
      <div class="comment">
        <p>
          {{ comment.body }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["comment"],
  data() {
    return {
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апреля",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    }
  }
};
</script>
<style lang="scss"></style>
