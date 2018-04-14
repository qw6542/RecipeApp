<template>
  <v-app>
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Fujian cuisine</h1>
    <p>
      Fujian Cuisine originates from the southeastern province of Fujian on the Pacific. The history of the cuisine dates back 5,000 years. Great seafood soups and the precise use of scintillating, but not tongue numbing, spices are the highlights.
    </p>
    <ul>
      <li>
        <strong>Location:</strong> Southeast China, <a href="https://goo.gl/maps/56ofBR1PY8J2">Fujian</a> Province, Xiamen, Quanzhou
      </li>
      <li>
        <strong>Distinctives:</strong> lighter, with a sweet and sour taste, using ingredients from the sea and the mountains.<br>
      </li>
    </ul>
    <h2>
      The Four Notable Feature Unusual Ingredients, Soups, Decoration, Seasonings
    </h2>
    <p>
      Their cuisine is known for the use of exotic <strong>delicacies</strong> from the mountains and sea as the main ingredients, an <strong>emphasis on soup eating</strong>, precisely applying various kinds of <strong>seasonings,</strong> and an emphasis on artistically cutting and <strong>decorating food.</strong>
    </p>
    <p>
      Fujian&apos;s abundant natural resources mean that their cuisine is rich in quality nutritious ingredients. They&apos;ll use somewhat <strong>exotic ingredients</strong> such as wild foods, wild herbs, varieties of mushrooms, bamboo, and
      many kinds of seafoods. So it is nutritious, and it is good for dieters
      since it isn&apos;t high calorie.
    </p>
    <h2>
      Flavors of Fujian Cuisine &#x2014; Sweet and Sour, Many Flavors of the Sea
    </h2>
    <p>
      A <strong>wide variety of seafoods</strong> are used to make Fujian dishes. Unlike most Western seafood restaurants where the main dishes include a few varieties of fish and oysters, the people of Fujian eat all these and things from the sea most people have never seen. There are various kinds of mussels including big ones, sea cucumbers, sea worms, kinds of snails and slugs, and varieties of sea vegetables that you can explore.
    </p>
    <h2>
      Condiments and Seasonings
    </h2>
    <p>
      <strong>Spices used:</strong> The Fujianese are distinguished for applying a wide variety of herbs and seasonings to flavor the food. They apply them to make the food taste good and make it aromatic. They also want to make it different and interesting, something new. When applied artistically, the various colors and herbs can also make a beautiful presentation.
    </p>
    <ul class="drop1">
      <li>
        <strong>Salty seasonings:</strong> sea salt, shrimp sauce, shrimp oil, and soy sauce.
      </li>
      <li>
        <strong>Sour seasonings:</strong> white vinegar and qiaotou (a vegetable similar to green onion.
      </li>
      <li>
        <strong>Sweet seasonings:</strong> brown sugar, anise, and cassia cinnamon.
      </li>
      <li>
        <strong>Hot seasonings:</strong> pepper, mustard, and shacha sauce.
      </li>
    </ul>
    <h2>
      Their Favorite Cooking Methods
    </h2>
    <p>
      Their chefs have developed <strong>numerous ways to cook</strong> food perhaps reflecting the history of the province. The region was a haven for refugees from the large Western Xia Empire and the Tang Empire. They brought with them their cooking styles. The position on the coast meant they had contact with Japanese and people from Southeast Asia too.
    </p>
    <p>
      <strong>They use numerous methods to cook:</strong> pan-frying, deep-frying, boiling, baking, stewing, mixing, saut&#xE9;ing with wine, stewing in gravy, grilling, cooking with red rice wine, simmering, stir-frying, smoking, braising and salting.
    </p>
    <p>
      <strong>Red rice wine:</strong> Their most peculiar method of cooking is cooking with red rice wine. This includes stir-frying with red rice wine, baking with red rice wine, quick-frying with red rice wine and deep-frying with red rice wine. The &quot;drunken&quot; (cooked in wine) dishes that are prevalent in Fujian Province are famous throughout China.
    </p>
    <p>
      <strong>Soup making:</strong> The people of Fujian love soup more than most of the rest of the Chinese. A common saying about their food is &quot;&#x4E0D;&#x6C64;&#x4E0D;&#x884C;&quot; (b&#xF9; t&#x101;ng b&#xF9; x&#xED;ng). It literally means: &quot;No soup is not OK.&quot; Or, a meal without soup isn&apos;t a good meal. Soup will often mean the main beverage or only beverage at a meal.
    </p>
  </v-app>
</template>

<script>
export default {
  name: 'FuJian',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670626473&di=379808df91a5cac572fa6e737be0f3fb&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110731%2F128199_110104210000_2.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671056897&di=50f1ae38fc26bb5c559e2052ab3b8264&imgtype=0&src=http%3A%2F%2Fzxpic.imtt.qq.com%2Fzxpic_imtt%2F2016%2F12%2F20%2Foriginalimage%2F102209_364320805_6_640_366.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670861435&di=70acbcef71d5491f68bb80cb5f4dab72&imgtype=0&src=http%3A%2F%2Fimgbdb3.bendibao.com%2Ffzbdb%2F20153%2F27%2F20150327134858_95791.jpg'
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style scoped>
  p,li{
    text-align: left;
  }

</style>
