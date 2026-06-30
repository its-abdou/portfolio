import { CollapsibleList } from "@/components/collapsible-list"

import { CERTIFICATIONS } from "../../data/certifications"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { CertificationItem } from "./certification-item"

export function Certifications() {
  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList max={3}>
        {CERTIFICATIONS.map((item) => (
          <CertificationItem key={item.credentialURL} certification={item} />
        ))}
      </CollapsibleList>
    </Panel>
  )
}
