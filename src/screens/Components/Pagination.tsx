import React, { useState } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select } from '../../components/ui/select';
import { SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../components/ui/select';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

// Mock data for pagination
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`,
  }));
};

// Mock data
const totalItems = 150;
const items = generateItems(totalItems);

export const PaginationPage = (): JSX.Element => {
  // State for basic pagination
  const [currentPage1, setCurrentPage1] = useState(1);
  const [itemsPerPage1] = useState(10);

  // State for advanced pagination
  const [currentPage2, setCurrentPage2] = useState(1);
  const [itemsPerPage2, setItemsPerPage2] = useState(10);

  // Helper functions
  const totalPages1 = Math.ceil(totalItems / itemsPerPage1);
  const totalPages2 = Math.ceil(totalItems / itemsPerPage2);

  const startIndex1 = (currentPage1 - 1) * itemsPerPage1;
  const endIndex1 = Math.min(startIndex1 + itemsPerPage1, totalItems);

  const startIndex2 = (currentPage2 - 1) * itemsPerPage2;
  const endIndex2 = Math.min(startIndex2 + itemsPerPage2, totalItems);

  // Current page items
  const currentItems1 = items.slice(startIndex1, endIndex1);
  const currentItems2 = items.slice(startIndex2, endIndex2);

  // Change page
  const paginate1 = (pageNumber: number) => {
    setCurrentPage1(pageNumber);
  };

  const paginate2 = (pageNumber: number) => {
    setCurrentPage2(pageNumber);
  };

  // Previous page
  const previousPage1 = () => {
    if (currentPage1 > 1) {
      setCurrentPage1(currentPage1 - 1);
    }
  };

  // Next page
  const nextPage1 = () => {
    if (currentPage1 < totalPages1) {
      setCurrentPage1(currentPage1 + 1);
    }
  };

  // Previous page for advanced pagination
  const previousPage2 = () => {
    if (currentPage2 > 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  };

  // Next page for advanced pagination
  const nextPage2 = () => {
    if (currentPage2 < totalPages2) {
      setCurrentPage2(currentPage2 + 1);
    }
  };

  // First page
  const firstPage2 = () => {
    setCurrentPage2(1);
  };

  // Last page
  const lastPage2 = () => {
    setCurrentPage2(totalPages2);
  };

  // Change items per page
  const changeItemsPerPage = (value: string) => {
    setItemsPerPage2(Number(value));
    setCurrentPage2(1); // Reset to first page when changing items per page
  };

  // Generate pagination buttons for basic pagination
  const paginationButtons1 = () => {
    const buttons = [];

    // Always include first page
    buttons.push(
      <Button
        key={1}
        variant={currentPage1 === 1 ? 'default' : 'outline'}
        size="sm"
        className={`h-8 w-8 ${currentPage1 === 1 ? 'bg-light-themeprimaryblue' : ''}`}
        onClick={() => paginate1(1)}
      >
        1
      </Button>
    );

    // Add ellipsis if needed
    if (currentPage1 > 3) {
      buttons.push(
        <span key="ellipsis1" className="mx-1">
          <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
        </span>
      );
    }

    // Add pages around current page
    for (
      let i = Math.max(2, currentPage1 - 1);
      i <= Math.min(totalPages1 - 1, currentPage1 + 1);
      i++
    ) {
      if (i === 1 || i === totalPages1) continue; // Skip first and last page as they're added separately

      buttons.push(
        <Button
          key={i}
          variant={currentPage1 === i ? 'default' : 'outline'}
          size="sm"
          className={`h-8 w-8 ${currentPage1 === i ? 'bg-light-themeprimaryblue' : ''}`}
          onClick={() => paginate1(i)}
        >
          {i}
        </Button>
      );
    }

    // Add ellipsis if needed
    if (currentPage1 < totalPages1 - 2) {
      buttons.push(
        <span key="ellipsis2" className="mx-1">
          <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
        </span>
      );
    }

    // Always include last page if there's more than one page
    if (totalPages1 > 1) {
      buttons.push(
        <Button
          key={totalPages1}
          variant={currentPage1 === totalPages1 ? 'default' : 'outline'}
          size="sm"
          className={`h-8 w-8 ${currentPage1 === totalPages1 ? 'bg-light-themeprimaryblue' : ''}`}
          onClick={() => paginate1(totalPages1)}
        >
          {totalPages1}
        </Button>
      );
    }

    return buttons;
  };

  // Generate pagination buttons for advanced pagination
  const paginationButtons2 = () => {
    const buttons = [];
    const showPages = 5; // Number of page buttons to show

    // Calculate range of pages to show
    let startPage = Math.max(1, currentPage2 - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages2, startPage + showPages - 1);

    // Adjust if we're near the end
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    // Add ellipsis before first page if needed
    if (startPage > 1) {
      buttons.push(
        <Button key="first" variant="outline" size="sm" className="h-8 w-8" onClick={firstPage2}>
          1
        </Button>
      );

      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis1" className="mx-1">
            <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
          </span>
        );
      }
    }

    // Add page buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={currentPage2 === i ? 'default' : 'outline'}
          size="sm"
          className={`h-8 w-8 ${currentPage2 === i ? 'bg-light-themeprimaryblue' : ''}`}
          onClick={() => paginate2(i)}
        >
          {i}
        </Button>
      );
    }

    // Add ellipsis after last page if needed
    if (endPage < totalPages2) {
      if (endPage < totalPages2 - 1) {
        buttons.push(
          <span key="ellipsis2" className="mx-1">
            <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
          </span>
        );
      }

      buttons.push(
        <Button key="last" variant="outline" size="sm" className="h-8 w-8" onClick={lastPage2}>
          {totalPages2}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Pagination" />
      <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Basic Pagination
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Simple Pagination</h3>
                      <div className="flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={previousPage1}
                          disabled={currentPage1 === 1}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center mx-2">{paginationButtons1()}</div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextPage1}
                          disabled={currentPage1 === totalPages1}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-blackblack-60 text-center">
                          Showing {startIndex1 + 1}-{endIndex1} of {totalItems} items
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Circular Buttons</h3>
                      <div className="flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={previousPage1}
                          disabled={currentPage1 === 1}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center mx-2">
                          {[1, 2, 3, 4, 5].map(number => (
                            <Button
                              key={number}
                              variant={currentPage1 === number ? 'default' : 'outline'}
                              size="sm"
                              className={`h-8 w-8 rounded-full mx-1 ${currentPage1 === number ? 'bg-light-themeprimaryblue' : ''}`}
                              onClick={() => paginate1(number)}
                            >
                              {number}
                            </Button>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextPage1}
                          disabled={currentPage1 === totalPages1}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-medium">Button Variants</h3>
                    <div className="flex flex-wrap gap-6">
                      <div className="space-y-2">
                        <h4 className="text-sm text-blackblack-60">Default Style</h4>
                        <div className="flex items-center">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 mx-1">
                            1
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            className="h-8 w-8 mx-1 bg-light-themeprimaryblue"
                          >
                            2
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 mx-1">
                            3
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm text-blackblack-60">Secondary Color</h4>
                        <div className="flex items-center">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 mx-1">
                            1
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            className="h-8 w-8 mx-1 bg-light-themesecondarypurple"
                          >
                            2
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 mx-1">
                            3
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm text-blackblack-60">Text Only</h4>
                        <div className="flex items-center">
                          <Button variant="ghost" size="sm" className="h-8">
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Previous
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 ml-4">
                            Next
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-medium">Sample Content with Pagination</h3>
                    <div className="border border-[#111c2d1a] rounded-lg">
                      <div className="p-4 border-b border-[#111c2d1a]">
                        <h4 className="font-medium">Items List</h4>
                      </div>
                      <ul className="divide-y divide-[#111c2d1a]">
                        {currentItems1.map(item => (
                          <li key={item.id} className="p-4 hover:bg-surfaceslightgray-10">
                            <h5 className="font-medium">{item.title}</h5>
                            <p className="text-sm text-blackblack-60">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="p-4 border-t border-[#111c2d1a] flex items-center justify-between">
                        <span className="text-sm text-blackblack-60">
                          Showing {startIndex1 + 1}-{endIndex1} of {totalItems} items
                        </span>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={previousPage1}
                            disabled={currentPage1 === 1}
                            className="h-8 w-8 p-0"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <div className="flex items-center mx-2">{paginationButtons1()}</div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={nextPage1}
                            disabled={currentPage1 === totalPages1}
                            className="h-8 w-8 p-0"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Advanced Pagination
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">With First and Last Page Buttons</h3>
                      <div className="flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={firstPage2}
                          disabled={currentPage2 === 1}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={previousPage2}
                          disabled={currentPage2 === 1}
                          className="h-8 w-8 p-0 ml-1"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center mx-2">{paginationButtons2()}</div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextPage2}
                          disabled={currentPage2 === totalPages2}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={lastPage2}
                          disabled={currentPage2 === totalPages2}
                          className="h-8 w-8 p-0 ml-1"
                        >
                          <ChevronsRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">With Items Per Page Control</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm text-blackblack-60 mr-2">Items per page:</span>
                          <Select
                            value={itemsPerPage2.toString()}
                            onValueChange={changeItemsPerPage}
                          >
                            <SelectTrigger className="w-[70px] h-8">
                              <SelectValue placeholder="10" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="10">10</SelectItem>
                              <SelectItem value="25">25</SelectItem>
                              <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={previousPage2}
                            disabled={currentPage2 === 1}
                            className="h-8 px-2 py-0"
                          >
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            Previous
                          </Button>
                          <span className="mx-2 text-sm">
                            Page {currentPage2} of {totalPages2}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={nextPage2}
                            disabled={currentPage2 === totalPages2}
                            className="h-8 px-2 py-0"
                          >
                            Next
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-medium">Pagination Examples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-[#111c2d1a] rounded-lg">
                        <div className="p-4 border-b border-[#111c2d1a]">
                          <h4 className="font-medium">Compact Pagination with Dropdown</h4>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm text-blackblack-60 mr-2">Page:</span>
                              <div className="relative">
                                <Select
                                  value={currentPage2.toString()}
                                  onValueChange={value => paginate2(parseInt(value))}
                                >
                                  <SelectTrigger className="w-[70px] h-8 pl-2 pr-1">
                                    <SelectValue placeholder="1" />
                                    <ChevronDown className="h-4 w-4" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {Array.from({ length: Math.min(10, totalPages2) }, (_, i) => (
                                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                                        {i + 1}
                                      </SelectItem>
                                    ))}
                                    {totalPages2 > 10 && (
                                      <SelectItem value={totalPages2.toString()}>
                                        {totalPages2}
                                      </SelectItem>
                                    )}
                                  </SelectContent>
                                </Select>
                              </div>
                              <span className="text-sm text-blackblack-60 mx-2">
                                of {totalPages2}
                              </span>
                            </div>

                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={previousPage2}
                                disabled={currentPage2 === 1}
                                className="h-8 w-8 p-0"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={nextPage2}
                                disabled={currentPage2 === totalPages2}
                                className="h-8 w-8 p-0 ml-1"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-[#111c2d1a] rounded-lg">
                        <div className="p-4 border-b border-[#111c2d1a]">
                          <h4 className="font-medium">Simple Text Pagination</h4>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={previousPage2}
                              disabled={currentPage2 === 1}
                              className="text-light-themeprimaryblue font-medium p-0 h-auto hover:bg-transparent hover:underline"
                            >
                              ← Previous
                            </Button>

                            <span className="text-sm text-blackblack-60">
                              Page {currentPage2} of {totalPages2}
                            </span>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={nextPage2}
                              disabled={currentPage2 === totalPages2}
                              className="text-light-themeprimaryblue font-medium p-0 h-auto hover:bg-transparent hover:underline"
                            >
                              Next →
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Full Table with Advanced Pagination</h3>
                  <div className="border border-[#111c2d1a] rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-surfaceslightgray-10">
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                              ID
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                              Title
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-blackblack-60">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#111c2d1a]">
                          {currentItems2.map(item => (
                            <tr key={item.id} className="hover:bg-surfaceslightgray-10">
                              <td className="py-3 px-4 text-blackblack-60">{item.id}</td>
                              <td className="py-3 px-4 font-medium">{item.title}</td>
                              <td className="py-3 px-4 text-blackblack-60">{item.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 border-t border-[#111c2d1a] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center">
                        <span className="text-sm text-blackblack-60 mr-2">Show:</span>
                        <Select value={itemsPerPage2.toString()} onValueChange={changeItemsPerPage}>
                          <SelectTrigger className="w-[70px] h-8">
                            <SelectValue placeholder="10" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="25">25</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className="text-sm text-blackblack-60 ml-2">
                          Showing {startIndex2 + 1}-{endIndex2} of {totalItems} items
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={firstPage2}
                          disabled={currentPage2 === 1}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={previousPage2}
                          disabled={currentPage2 === 1}
                          className="h-8 w-8 p-0 ml-1"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center mx-2">{paginationButtons2()}</div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextPage2}
                          disabled={currentPage2 === totalPages2}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={lastPage2}
                          disabled={currentPage2 === totalPages2}
                          className="h-8 w-8 p-0 ml-1"
                        >
                          <ChevronsRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Pagination Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// State for pagination
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(10);

// Calculate total pages
const totalPages = Math.ceil(totalItems / itemsPerPage);

// Get current items
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
const currentItems = items.slice(startIndex, endIndex);

// Change page
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

// Previous page
const previousPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

// Next page
const nextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

// JSX for basic pagination
<div className="flex items-center justify-center">
  <Button 
    variant="outline" 
    size="sm" 
    onClick={previousPage}
    disabled={currentPage === 1}
    className="h-8 w-8 p-0"
  >
    <ChevronLeft className="h-4 w-4" />
  </Button>
  <div className="flex items-center mx-2">
    {paginationButtons()}
  </div>
  <Button 
    variant="outline" 
    size="sm" 
    onClick={nextPage}
    disabled={currentPage === totalPages}
    className="h-8 w-8 p-0"
  >
    <ChevronRight className="h-4 w-4" />
  </Button>
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">
                    Pagination Buttons Logic Code Example
                  </h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Generate pagination buttons
const paginationButtons = () => {
  const buttons = [];
  
  // Always include first page
  buttons.push(
    <Button 
      key={1} 
      variant={currentPage === 1 ? "default" : "outline"} 
      size="sm" 
      className={\`h-8 w-8 \${currentPage === 1 ? "bg-light-themeprimaryblue" : ""}\`}
      onClick={() => paginate(1)}
    >
      1
    </Button>
  );
  
  // Add ellipsis if needed
  if (currentPage > 3) {
    buttons.push(
      <span key="ellipsis1" className="mx-1">
        <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
      </span>
    );
  }
  
  // Add pages around current page
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    if (i === 1 || i === totalPages) continue; // Skip first and last page as they're added separately
    
    buttons.push(
      <Button 
        key={i} 
        variant={currentPage === i ? "default" : "outline"} 
        size="sm" 
        className={\`h-8 w-8 \${currentPage === i ? "bg-light-themeprimaryblue" : ""}\`}
        onClick={() => paginate(i)}
      >
        {i}
      </Button>
    );
  }
  
  // Add ellipsis if needed
  if (currentPage < totalPages - 2) {
    buttons.push(
      <span key="ellipsis2" className="mx-1">
        <MoreHorizontal className="h-4 w-4 text-blackblack-60" />
      </span>
    );
  }
  
  // Always include last page if there's more than one page
  if (totalPages > 1) {
    buttons.push(
      <Button 
        key={totalPages} 
        variant={currentPage === totalPages ? "default" : "outline"} 
        size="sm" 
        className={\`h-8 w-8 \${currentPage === totalPages ? "bg-light-themeprimaryblue" : ""}\`}
        onClick={() => paginate(totalPages)}
      >
        {totalPages}
      </Button>
    );
  }
  
  return buttons;
};`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">
                    Advanced Pagination with Items Per Page Code Example
                  </h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// State for advanced pagination
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10);

// Calculate total pages and items
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
const currentItems = items.slice(startIndex, endIndex);

// First page
const firstPage = () => {
  setCurrentPage(1);
};

// Last page
const lastPage = () => {
  setCurrentPage(totalPages);
};

// Change items per page
const changeItemsPerPage = (value) => {
  setItemsPerPage(Number(value));
  setCurrentPage(1); // Reset to first page when changing items per page
};

// JSX for advanced pagination
<div className="flex items-center justify-between">
  <div className="flex items-center">
    <span className="text-sm text-blackblack-60 mr-2">Show:</span>
    <Select value={itemsPerPage.toString()} onValueChange={changeItemsPerPage}>
      <SelectTrigger className="w-[70px] h-8">
        <SelectValue placeholder="10" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="25">25</SelectItem>
        <SelectItem value="50">50</SelectItem>
      </SelectContent>
    </Select>
    <span className="text-sm text-blackblack-60 ml-2">
      Showing {startIndex + 1}-{endIndex} of {totalItems} items
    </span>
  </div>
  
  <div className="flex items-center">
    <Button 
      variant="outline" 
      size="sm" 
      onClick={firstPage}
      disabled={currentPage === 1}
      className="h-8 w-8 p-0"
    >
      <ChevronsLeft className="h-4 w-4" />
    </Button>
    <Button 
      variant="outline" 
      size="sm" 
      onClick={previousPage}
      disabled={currentPage === 1}
      className="h-8 w-8 p-0 ml-1"
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <div className="flex items-center mx-2">
      {paginationButtons()}
    </div>
    <Button 
      variant="outline" 
      size="sm" 
      onClick={nextPage}
      disabled={currentPage === totalPages}
      className="h-8 w-8 p-0"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
    <Button 
      variant="outline" 
      size="sm" 
      onClick={lastPage}
      disabled={currentPage === totalPages}
      className="h-8 w-8 p-0 ml-1"
    >
      <ChevronsRight className="h-4 w-4" />
    </Button>
  </div>
</div>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
      </main>
    </div>
  );
};
