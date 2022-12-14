import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import { useRouter, useRoute } from "vue-router";
import { onBeforeMount } from "vue";

const getConfig = index => ({
  path: "/user/userList/:id",
  name: "userDetail",
  query: { id: String(index) },
  meta: {
    title: `No.${index} - 用户详情`,
    // 最大打开标签数
    dynamicLevel: 3
  }
  // 最大打开标签数
});

export function useDetail() {
  const route = useRoute();
  const router = useRouter();
  const id = route.query?.id ? route.query?.id : route.params?.id;

  function toDetail(
    index: number | string | string[] | number[],
    model: string
  ) {
    if (model === "query") {
      // 保存信息到标签页
      useMultiTagsStoreHook().handleTags("push", {
        ...getConfig(index)
      });
      // 路由跳转
      router.push({
        name: getConfig(index).name,
        query: { id: String(index) }
      });
    } else {
      useMultiTagsStoreHook().handleTags("push", {
        ...getConfig(index)
      });
      router.push({
        name: getConfig(index).name,
        params: { id: String(index) }
      });
    }
  }

  function initToDetail(model) {
    onBeforeMount(() => {
      if (id) toDetail(id, model);
    });
  }

  return { toDetail, initToDetail, id, router };
}
