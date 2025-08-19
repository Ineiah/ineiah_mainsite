<template>
  <ShadSidebar v-bind="props">
    <ShadSidebarHeader>
      <AdminTeamSwitcher :teams="data.teams" />
    </ShadSidebarHeader>

    <ShadSidebarContent>
      <AdminNavMain :items="data.navMain" />
      <AdminNavProjects :projects="data.projects" />
    </ShadSidebarContent>

    <ShadSidebarFooter>
      <AdminNavUser :user="data.user" />
    </ShadSidebarFooter>

    <ShadSidebarRail />
  </ShadSidebar>
</template>

<script setup lang="ts">
import type { SidebarProps } from '~/components/ui/sidebar'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from 'lucide-vue-next'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon"
})

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/map.jpg"
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise"
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup"
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free"
    }
  ],
  navMain: [
    {
      title: "Pages web",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Accueil",
          url: "/admin"
        },
        {
          title: "Nos prestations",
          url: "/admin/prestations"
        },
        {
          title: "Notre histoire",
          url: "/admin"
        },
        {
          title: "FAQ",
          url: "/admin"
        },
        {
          title: "Contact",
          url: "/admin"
        }
      ]
    },
    {
      title: "SEO",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/admin"
        },
        {
          title: "Explorer",
          url: "/admin"
        },
        {
          title: "Quantum",
          url: "/admin"
        }
      ]
    },
    {
      title: "Réglages",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/admin"
        },
        {
          title: "Team",
          url: "/admin"
        },
        {
          title: "Billing",
          url: "/admin"
        },
        {
          title: "Limits",
          url: "/admin"
        }
      ]
    }
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart
    },
    {
      name: "Travel",
      url: "#",
      icon: Map
    }
  ]
}
</script>
