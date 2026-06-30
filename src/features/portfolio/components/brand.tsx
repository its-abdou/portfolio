import { Panel, PanelHeader, PanelTitle } from "./panel"

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader>

      <div className="flex items-center justify-center py-12 text-muted-foreground">
        Brand assets coming soon
      </div>
    </Panel>
  )
}
