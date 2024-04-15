import { portIdArr } from "@/data/portId";
import { PortId } from "@/types/portId";

export function TideInfo() {
  return (
    <div>
      <h2>Tide Information</h2>
      <p>Coming soon...</p>
      <select name="" id="">
        {portIdArr.map((port: PortId) => {
          return (
            <option key={port.id} value={port.id}>
              {port.portname}
            </option>
          );
        })}
      </select>
    </div>
  );
}
