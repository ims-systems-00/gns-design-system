import React from "react";
import Card from '../../Cards/CardBase';
import CardBody from '../../Cards/CardBodyBase';
import ImsCarousel from "../ImsCarousel";

const DashboardCarouselExample = ({}) => {
  let isShowAble = false;
  return (
    <ImsCarousel>
      <Card>
        <CardBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBody>
      </Card>
      {true && (
        <Card>
          <CardBody>
            Rafee
          </CardBody>
        </Card>
      )}
      {isShowAble && <Card>
        <CardBody>
         test
        </CardBody>
      </Card>}
      <Card>
        <CardBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBody>
      </Card>
    </ImsCarousel>
  );
};

export default DashboardCarouselExample;
