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

import data from '../../_config/quality-certifications-data';

const QualityCertification = () => {
  return (
    <Table className='border'>
      <TableCaption>Quality Certification</TableCaption>
      <TableHeader>
        <TableRow className='bg-secondary hover:bg-secondary'>
          <TableHead>Certification</TableHead>
          <TableHead>Certified By</TableHead>
          <TableHead>Certification No.</TableHead>
          <TableHead>Business Scope</TableHead>
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
              <TableCell>{row.business_scope}</TableCell>
              <TableCell>{row.validity}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default QualityCertification;
