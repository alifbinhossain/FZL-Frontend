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

import data from '../../_config/occupation-health-and-safety-data';

const OccupationHealthAndSafety = () => {
  return (
    <Table className='border'>
      <TableCaption>Occupation Health and Safety</TableCaption>
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

export default OccupationHealthAndSafety;
