import { compareDesc } from "date-fns"

import { CollapsibleList } from "@/components/collapsible-list"

import { BOOKMARKS } from "../../data/bookmarks"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { BookmarkItem } from "./bookmark-item"

const SORTED_BOOKMARKS = [...BOOKMARKS].sort((a, b) => {
  return compareDesc(new Date(a.bookmarkedAt), new Date(b.bookmarkedAt))
})

export function Bookmarks() {
  return (
    <Panel id="bookmarks">
      <PanelHeader>
        <PanelTitle>
          Bookmarks
          <PanelTitleSup>({SORTED_BOOKMARKS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList max={3}>
        {SORTED_BOOKMARKS.map((item) => (
          <BookmarkItem key={item.url} bookmark={item} />
        ))}
      </CollapsibleList>
    </Panel>
  )
}
