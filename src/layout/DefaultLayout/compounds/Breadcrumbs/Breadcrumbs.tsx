import "./Breadcrumbs.css";

import React from "react";
import { Link } from "react-router-dom";

import { RouteMeta } from "../../../../routes/types";

export const Breadcrumbs: BreadCrumbsComponent = (props) => {
  const { meta } = props;
  const metas = flatten(meta).reverse();
  return (
    <div className="breadcrumbs">
      <span>Breadcrumbs: </span>
      <ul>
        {metas.map((m) => (
          <li>
            <Link to={m.path}>{m.titleDefault}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  function flatten(meta: RouteMeta, metas: RouteMeta[] = []): RouteMeta[] {
    metas.push(meta);
    if (meta.parent) {
      metas = flatten(meta.parent, metas);
    }
    return metas;
  }
};

export type BreadCrumbsProps = {
  meta: RouteMeta;
};
export type BreadCrumbsComponent = React.FC<BreadCrumbsProps>;
