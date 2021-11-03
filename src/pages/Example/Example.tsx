import React from "react";
import { Divider } from "../../ui-lib/Divider/Divider";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import { Status } from "./Status/Status";
import { StatusForm } from "./StatusForm/StatusForm";

export const Example = () => {
  return (
    <>
      <h1>Example</h1>
      <Spacer size={32} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus
        rutrum sapien, id condimentum nibh lobortis sed. Pellentesque iaculis
        tempus congue.
      </p>

      <Spacer size={48} />
      <Divider />
      <Spacer size={48} />

      <Status />

      <Spacer size={48} />
      <Divider />
      <Spacer size={48} />

      <StatusForm />
    </>
  );
};
