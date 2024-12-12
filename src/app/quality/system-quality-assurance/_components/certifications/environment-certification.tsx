import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import data from '../../_config/environment-certifications-data';

const EnvironmentCertification = () => {
  return (
    <Table className='border'>
      <TableCaption>Environment Certification</TableCaption>
      <TableHeader>
        <TableRow className='bg-secondary hover:bg-secondary'>
          <TableHead>Certification</TableHead>
          <TableHead>Certified By</TableHead>
          <TableHead>Certification No.</TableHead>
          <TableHead className='w-[280px]'>Scope</TableHead>
          <TableHead>Validity Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{row.certification}</TableCell>
              <TableCell>{row.certified_by}</TableCell>
              <TableCell>{row.certificate_no}</TableCell>
              <TableCell>{row.scope}</TableCell>
              <TableCell>
                <span>{row.validity}</span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default EnvironmentCertification;
