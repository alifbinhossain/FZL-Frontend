import React from 'react';

import PageContainer from '@/components/page-container';

import Certificates from './_components/certificates';
import QualityCertification from './_components/certifications/quality-certification';
import ProductCertification from './_components/certifications/product-certification';
import EnvironmentCertification from './_components/certifications/environment-certification';
import SocialResponsibility from './_components/certifications/social-responsibility';
import OccupationHealthAndSafety from './_components/certifications/occupation-health-and-safety';

const Page = () => {
  return (
    <PageContainer>
      <div className='pb-8 space-y-8 '>
        <p className='text-muted-foreground text-lg '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, quasi
          reprehenderit odit unde iusto cumque ipsa. Nemo dolor quos nam
          asperiores facere placeat veniam saepe dignissimos totam assumenda
          eaque deserunt, suscipit ipsum laudantium animi officiis! Autem
          commodi odit nisi adipisci saepe officiis veniam expedita quasi
          tempore voluptas quisquam corrupti laudantium, numquam magni nam
          necessitatibus dolores iure laborum ipsam tempora dolore enim eum
          fugiat repellat. Aspernatur eligendi numquam eum neque adipisci eius
          iusto repellat illo similique aperiam temporibus error optio,
          voluptates culpa, aliquid delectus ipsa sint! Fuga voluptatum
          accusantium error dolores.
        </p>
        <QualityCertification />
        <ProductCertification />
        <EnvironmentCertification />
        <SocialResponsibility />
        <OccupationHealthAndSafety />
      </div>
      <Certificates />
    </PageContainer>
  );
};

export default Page;
