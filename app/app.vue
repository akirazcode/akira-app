<script setup lang="ts">
const appData = {
  id: 'yxPTcHWDzVufFoEe7afu',
  ownerId: 'D2i3CzBpelR9fHdUBuCL',
  userIds: ['D2i3CzBpelR9fHdUBuCL'],
  subscriptionId: 'yxPTcHWDzVufFoEe7afu',
  status: 'active',
  planTier: 'rocket',
  slug: 'gustavo',
  title: 'Gustavo Akira',
  description:
    'Na paz, com negócios digitais 🏖️\nBacharel Eng. Mecatrônica\n2x Google for Startups',
  image: {
    type: 'image',
    url: 'https://storage.googleapis.com/storage.apptime.app/public/apps/VRMi9FSnwI9A9YhWGlJ3/storage/libraries/default/I5lx6PQQqIW8LL5cNIvE/imgHd.jpeg',
  },
  category: 'business',
  theme: {
    borderRadius: 'sharp',
    fontFamilyName: 'Big Shoulders',
    primaryColor: '#0e0e52',
    onPrimaryColor: '#00ffec',
    secondaryColor: '#ff0066',
    onSecondaryColor: '#ffffff',
    backgroundColor: '#1e1e7f',
    onBackgroundColor: '#ffffff',
    onBackgroundDimColor: '#8a8a8a',
    surfaceColor: '#2a2a99',
    onSurfaceColor: '#ffffff',
    surfaceContainerColor: '#3d3d9b',
    onSurfaceContainerColor: '#bbbbff',
    outlineColor: '#6c63ff',
    outlineHighlightColor: '#00ff99',
  },
  content: {
    header: {
      id: 'UJM2ujgYnaxH',
      type: 'profile',
    },
    body: [
      {
        id: 'vtCQpuZDYlab',
        type: 'card',
        props: {
          link: {
            badge: {
              text: 'Este site foi feito aqui',
            },
            description: {
              text: 'Aprenda e crie projetos com IA + Experts, tudo em uma só plataforma 🚀 ',
            },
            icon: {
              icon: 'https://storage.googleapis.com/storage.apptime.app/public/apps/VRMi9FSnwI9A9YhWGlJ3/storage/libraries/default/CxFq7ZQkcYOSYtuUumyi/imgHd.png',
              type: 'image',
            },
            title: {
              text: 'Apptime',
            },
          },
          to: 'https://appti.me?utm_source=akiracode',
        },
      },
      {
        id: 'aW3Pe6I26lYk',
        type: 'card',
        props: {
          link: {
            description: {
              text: 'Conteúdo e conexões sem distrações. Seria o vibe networking? 🤔',
            },
            icon: {
              icon: 'https://storage.googleapis.com/storage.apptime.app/public/apps/VRMi9FSnwI9A9YhWGlJ3/storage/libraries/default/5ysnvbt6wZzAvL6qA983/imgHd.png',
              type: 'image',
            },
            title: {
              text: 'Forus',
            },
          },
          to: 'https://forus.app?utm_source=akiracode',
        },
      },
      {
        id: 'jRPE5tbxILG2',
        type: 'card',
        props: {
          link: {
            description: {
              text: 'Algumas experiências e idéias pra não perder tempo no digital ✍️',
            },
            icon: {
              icon: 'https://storage.googleapis.com/storage.apptime.app/websiteIcons/linkedin.webp',
              type: 'image',
            },
            title: {
              text: 'LinkedIn',
            },
          },
          to: 'https://linkedin.com/in/akiracode?utm_source=akiracode',
        },
      },
      {
        id: 'HBc_ixhV4uo7',
        type: 'card',
        props: {
          link: {
            description: {
              text: 'Codando infinito às 5:26 da manhã 👾',
            },
            icon: {
              icon: 'https://storage.googleapis.com/storage.apptime.app/websiteIcons/github.webp',
              type: 'image',
            },
            title: {
              text: 'GitHub',
            },
          },
          to: 'https://github.com/akirazcode?utm_source=akiracode',
        },
      },
      {
        id: '2lqqd2lh1',
        type: 'card',
        props: {
          link: {
            description: {
              text: 'Sempre bom mais fontes de renda 😎',
            },
            icon: {
              icon: 'https://storage.googleapis.com/storage.apptime.app/public/websiteIcons/www_enjoei_com_br.jpg',
            },
            title: {
              text: 'Enjoei',
            },
          },
          to: 'https://www.enjoei.com.br/@gustavoakira?utm_source=akiracode',
        },
      },
      {
        id: 'T1fsg9yRz0i1',
        type: 'card',
        props: {
          link: {
            description: {
              text: 'Nem uso, mas ta ai 🤷‍♂️',
            },
            icon: {
              icon: 'https://storage.googleapis.com/storage.apptime.app/websiteIcons/instagram.webp',
              type: 'image',
            },
            title: {
              text: 'Instagram',
            },
          },
          to: 'https://instagram.com/gustms?utm_source=akiracode',
        },
      },
    ],
  },
  createdAt: '2024-12-24T00:12:51.422718Z',
  updatedAt: '2025-08-18T03:07:20.577Z',
};

interface AppItem {
  id: string;
  type: string;
  props: {
    link?: {
      badge?: { text: string };
      description?: { text: string };
      icon?: { icon: string; type?: string };
      title?: { text: string };
    };
    to?: string;
    media?: {
      type: 'image' | 'video';
      url: string;
    };
  };
}

const profile = ref({
  title: appData.title,
  description: appData.description,
  image: appData.image,
  backgroundVideo:
    'https://storage.googleapis.com/storage.apptime.app/public/apps/yxPTcHWDzVufFoEe7afu/grid/videos/zVakzksFkRD215lfeGdHZC1hogR1vTu0/vidHd.mp4',
});

const content = ref<{ header: any; body: AppItem[] }>(appData.content);


</script>

<template>
  <div class="scanlines"></div>
  <div class="vignette"></div>
  <div id="app" class="app-container">
    <!-- Header Section -->
    <div v-if="profile.image" class="profile-header flex flex-col items-center">
      <video
        v-if="profile.backgroundVideo"
        autoplay
        muted
        loop
        playsinline
        class="profile-bg-video"
      >
        <source :src="profile.backgroundVideo" type="video/mp4" />
      </video>
      <div class="profile-header-overlay"></div>

      <img
        :src="profile.image.url"
        alt="Foto de perfil de Gustavo Akira"
        class="profile-image animate-fade-in z-10"
      />
      <h1 class="profile-name animate-slide-up z-10">{{ profile.title }}</h1>
      <p class="profile-description animate-slide-up z-10">
        {{ profile.description }}
      </p>
    </div>

    <!-- Body Content (Cards) -->
    <template v-for="item in content.body" :key="item.id">
      <a
        v-if="item.type === 'card' && item.props.to"
        :href="item.props.to"
        target="_blank"
        rel="noopener noreferrer"
        class="card w-full animate-pop-in"
      >
        <template v-if="item.props.media">
          <img
            v-if="item.props.media.type === 'image'"
            :src="item.props.media.url"
            :alt="item.props.link?.title?.text || 'Mídia do card'"
            class="card-media card-media-image"
          />
          <video
            v-else-if="item.props.media.type === 'video'"
            :src="item.props.media.url"
            controls
            class="card-media card-media-video"
          ></video>
        </template>
        <div v-if="item.props.link" class="card-link flex-grow">
          <img
            v-if="item.props.link.icon"
            :src="item.props.link.icon.icon"
            :alt="item.props.link.title?.text || 'Ícone do link'"
            class="card-link-icon"
          />
          <div class="flex flex-col items-start text-left flex-grow">
            <span v-if="item.props.link.title" class="card-title">
              {{ item.props.link.title.text }}
              <span v-if="item.props.link.badge" class="card-badge">{{
                item.props.link.badge.text
              }}</span>
            </span>
            <span v-if="item.props.link.description" class="card-description">{{
              item.props.link.description.text
            }}</span>
          </div>
        </div>
      </a>
      <div
        v-else-if="item.type === 'card' && !item.props.to"
        class="card w-full animate-pop-in"
      >
        <template v-if="item.props.media">
          <img
            v-if="item.props.media.type === 'image'"
            :src="item.props.media.url"
            :alt="item.props.link?.title?.text || 'Mídia do card'"
            class="card-media card-media-image"
          />
          <video
            v-else-if="item.props.media.type === 'video'"
            :src="item.props.media.url"
            controls
            class="card-media card-media-video"
          ></video>
        </template>
        <div v-if="item.props.link" class="card-link flex-grow">
          <img
            v-if="item.props.link.icon"
            :src="item.props.link.icon.icon"
            :alt="item.props.link.title?.text || 'Ícone do link'"
            class="card-link-icon"
          />
          <div class="flex flex-col items-start text-left flex-grow">
            <span v-if="item.props.link.title" class="card-title">
              {{ item.props.link.title.text }}
              <span v-if="item.props.link.badge" class="card-badge">{{
                item.props.link.badge.text
              }}</span>
            </span>
            <span v-if="item.props.link.description" class="card-description">{{
              item.props.link.description.text
            }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
