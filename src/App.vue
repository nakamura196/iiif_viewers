<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <span>IIIF Viewers</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row class="my-5">
          <v-col cols="12" sm="12">
            <iframe
              :src="'http://universalviewer.io/examples/uv/uv.html#?manifest='+manifest"
              width="100%"
              height="600"
              allowfullscreen
              frameborder="0"
              v-show="manifest"
            ></iframe>
          </v-col>
        </v-row>

        <v-row class="my-5" v-show="manifest">
          <v-col cols="12" sm="7">
            <v-card tile>
              <v-data-table
                :headers="headers"
                :items="metadata"
                :items-per-page="10"
                class="elevation-1"
              ></v-data-table>
            </v-card>

            <v-card class="my-5" tile>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr v-if="properties.attribution != null">
                      <td class="py-2">Attribution</td>
                      <td class="py-2">{{ properties.attribution }}</td>
                    </tr>
                    <tr v-if="properties.license != null">
                      <td class="py-2">License</td>
                      <td class="py-2">{{ properties.license }}</td>
                    </tr>
                    <tr v-if="properties.related != null">
                      <td class="py-2">Related</td>
                      <td class="py-2">{{ properties.related }}</td>
                    </tr>
                    <tr v-if="properties.within != null">
                      <td class="py-2">Within</td>
                      <td class="py-2">{{ properties.within }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>

          <v-col cols="12" sm="5">
            <v-card tile>
              <v-list shaped>
                <v-subheader>Manifest URI icon & IIIF viewers</v-subheader>
                <v-list-item-group>
                  <v-list-item :href="manifest" target="_blank">
                    <v-list-item-icon>
                      <img
                        src="https://pbs.twimg.com/profile_images/596366309601845248/2uaPY5NH_400x400.png"
                        height="30px"
                      />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Manifest</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :href="item.url+manifest"
                    target="_blank"
                    v-if="item.flg != false"
                  >
                    <v-list-item-icon>
                      <img :src="item.image" height="30px" />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <p class="my-5" v-show="updated_manifest != null">
          画像が表示されない場合は
          <a :href="'./?manifest='+updated_manifest">こちら</a>をお試しください。
        </p>
      </v-container>
    </v-content>

    <v-footer class="py-5">
      <v-col class="text-center" cols="12">
        <a href="https://researchmap.jp/nakamura.satoru/?lang=english">Satoru Nakamura</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";

let i3c_path = "https://w3id.org/dhj/i3c/";

export default {
  data: () => ({
    manifest: null,
    updated_manifest: null,
    properties: {
      description: null,
      attribution: null,
      license: null,
      related: null,
      within: null
    },
    items: [],
    headers: [
      { text: "Field", value: "field" },
      { text: "Value", value: "value" }
    ],
    status: [],
    metadata: []
  }),
  mounted() {
    let original_manifest = this.$route.query.manifest;
    this.manifest = original_manifest;

    if (this.manifest.indexOf(i3c_path) == -1) {
      this.updated_manifest = i3c_path + this.manifest;
    }

    this.items.push({
      text: "Mirador",
      image: "https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png",
      url: "http://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest="
    });
    this.items.push({
      text: "Universal Viewer",
      image: "https://iiif.dl.itc.u-tokyo.ac.jp/images/uv.png",
      url: "http://universalviewer.io/examples/uv/uv.html#?manifest="
    });

    this.items.push({
      text: "Image Annotator",
      image: "https://www.kanzaki.com/parts/me128b.png",
      url: "http://www.kanzaki.com/works/2016/pub/image-annotator?u="
    });

    this.items.push({
      text: "IIIF Curation Viewer",
      image: "https://iiif.dl.itc.u-tokyo.ac.jp/images/icp.png",
      url:
        "http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="
    });

    this.items.push({
      text: "KuroNetくずし字認識ビューア",
      image: "https://iiif.dl.itc.u-tokyo.ac.jp/images/icp.png",
      url: "http://codh.rois.ac.jp/kuronet/iiif-curation-viewer/?manifest="
    });

    this.items.push({
      text: "TIFY",
      image: "https://avatars2.githubusercontent.com/u/31309906",
      url: "http://tify.sub.uni-goettingen.de/demo.html?manifest="
    });

    this.items.push({
      text: "Leaflet",
      image: "https://iiif.dl.itc.u-tokyo.ac.jp/images/leaflet.png",
      url: "http://da.dl.itc.u-tokyo.ac.jp/leaflet/?manifest="
    });

    axios
      .get(this.manifest)
      .then(response => {
        let result = response.data;
        this.main(result);
      })
      .catch(error => {
        console.log("E1\t" + error);
      });
  },
  methods: {
    main: function(result) {
      if (result["@type"] != "sc:Manifest") {
        return;
      }

      let metadata = result["metadata"];
      for (let i = 0; i < metadata.length; i++) {
        let obj = metadata[i];
        if (obj.value != "" && obj.value != null) {
          this.metadata.push({
            field: obj.label,
            value: obj.value
          });
        }
      }

      for (let p in this.properties) {
        if (result[p]) {
          this.properties[p] = result[p];
        }
      }
    }
  }
};
</script>
